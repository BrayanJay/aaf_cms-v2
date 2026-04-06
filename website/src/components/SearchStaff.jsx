import { useState, useRef } from 'react';

const API_BASE = 'https://asiaassetfinance.net/imasapi/v2/application/api.php';

const SearchStaff = () => {
  const [nic, setNic] = useState('');
  const [nicError, setNicError] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const photoBlobUrl = useRef(null);

  const validateNic = (value) => {
    if (!value) return 'NIC number is required.';
    if (/^\d{9}[Vv]$/.test(value)) return '';
    if (/^\d{12}$/.test(value)) return '';
    return 'Enter a valid NIC (9 digits + V, or 12 digits).';
  };

  const handleNicChange = (e) => {
    const value = e.target.value;
    setNic(value);
    if (nicError) setNicError(validateNic(value));
  };

  const handleSearch = async () => {
    const error = validateNic(nic);
    if (error) { setNicError(error); return; }
    setNicError('');
    setNotFound(false);
    setSearchResult(null);
    setSearching(true);

    // Revoke previous blob URL to free memory
    if (photoBlobUrl.current) {
      URL.revokeObjectURL(photoBlobUrl.current);
      photoBlobUrl.current = null;
    }

    try {
      const body = JSON.stringify({ inputNICNo: nic });
      const headers = { 'Content-Type': 'application/json' };

      const [detailsRes, imageRes] = await Promise.all([
        fetch(`${API_BASE}/staffdetails`, { method: 'POST', headers, body }),
        fetch(`${API_BASE}/staffimagefromnic`, { method: 'POST', headers, body }),
      ]);

      const detailsJson = await detailsRes.json();

      if (detailsJson.status !== 'success' || !detailsJson.data) {
        setNotFound(true);
        return;
      }

      const d = detailsJson.data;

      // Build blob URL for photo
      let photoUrl = null;
      if (imageRes.ok) {
        const blob = await imageRes.blob();
        if (blob.size > 0 && blob.type.startsWith('image/')) {
          photoBlobUrl.current = URL.createObjectURL(blob);
          photoUrl = photoBlobUrl.current;
        }
      }

      setSearchResult({
        mrsNumber:  d.HRIS_NO,
        fullName:   d.FullName,
        branch:     d.Branch,
        department: d.Department,
        status:     d.EmployeeStatus,
        photo:      photoUrl,
      });
    } catch {
      setNotFound(true);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="relative text-center pt-5 lg:pt-10 px-10 lg:px-20">
        <h2
          className="inline-block px-5 border-b-2 lg:border-b-4 border-blue-500 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700"
          data-aos="fade-up"
        >
          Search <span className="font-bold text-blue-900">Staff</span>
        </h2>
        <p
          className="pb-5 pt-5 text-xs lg:text-sm font-normal text-black/50 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Verify our representative&apos;s credentials by Searching their National Identity Card (NIC) number here.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div className={`flex items-center rounded-full border bg-white shadow-sm overflow-hidden transition-colors duration-200 ${nicError ? 'border-red-400' : 'border-slate-300'}`}>
          <input
            type="text"
            value={nic}
            onChange={handleNicChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Enter NIC Number"
            className="flex-1 px-5 py-3 text-sm md:text-base text-gray-700 bg-transparent outline-none placeholder-gray-400"
          />
          <button
            type="button"
            onClick={handleSearch}
            disabled={searching}
            className="m-1 px-8 py-2.5 bg-blue-950 hover:bg-blue-700 disabled:opacity-60 transition-colors duration-200 text-white text-sm md:text-base font-bold rounded-full whitespace-nowrap"
          >
            {searching ? 'Searching...' : 'Search'}
          </button>
        </div>
        {nicError && (
          <p className="mt-2 text-xs text-red-500 text-center">{nicError}</p>
        )}
      </div>

      {/* Employee Result Card */}
      {searchResult && (
        <div className="w-full max-w-2xl mx-auto mt-8 mb-4" data-aos="fade-up">
          <div className="flex rounded-2xl border border-slate-200 shadow-md overflow-hidden bg-white">
            {/* Photo Panel */}
            <div className="relative flex-shrink-0 w-40 sm:w-48">
              <img
                src={searchResult.photo}
                alt={searchResult.fullName}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/200x240/1e3a5f/ffffff?text=No+Photo';
                }}
              />
              <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full ${
                searchResult.status === 'In-Service'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
              }`}>
                {searchResult.status?.toUpperCase()}
              </span>
            </div>

            {/* Info Panel */}
            <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 gap-3">
              <div className="border border-slate-200 rounded-lg px-4 py-2.5">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">MRS Number</p>
                <p className="text-sm sm:text-base font-bold text-slate-800">{searchResult.mrsNumber}</p>
              </div>
              <div className="border border-slate-200 rounded-lg px-4 py-2.5">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">Full Name</p>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">{searchResult.fullName}</p>
              </div>
              <div className="border border-slate-200 rounded-lg px-4 py-2.5">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">Branch</p>
                <p className="text-sm sm:text-base font-bold text-slate-800">{searchResult.branch}</p>
              </div>
              <div className="border border-slate-200 rounded-lg px-4 py-2.5">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">Department</p>
                <p className="text-sm sm:text-base font-bold text-slate-800">{searchResult.department}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {notFound && (
        <p className="mt-6 text-sm text-red-500 text-center">No staff member found for the provided NIC number.</p>
      )}
    </div>
  );
};

export default SearchStaff;
