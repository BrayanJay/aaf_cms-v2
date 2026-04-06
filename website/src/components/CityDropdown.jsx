import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const CityDropdown = ({ value, onChange, token }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
            "https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getcities",
            {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                }
              }
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const { t } = useTranslation();
    const inquiryForm = t("inquiryForm", { returnObjects: true });

  return (
    <div>
      <select
        required
        name="city"
        className="w-full px-3 py-2 border rounded-md max-h-10"
        value={value}
        onChange={onChange}
      >
        <option value="">{inquiryForm.field9}</option>
        
        {cities.map((city) => (
          <option key={city.CityId} value={city.CityId}>
            {city.PostalCode} | {city.CityName} | {city.DisName}
          </option>
        ))}
      </select>
    </div>
  );
};

CityDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default CityDropdown;
