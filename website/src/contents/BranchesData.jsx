//Branches data file
const branchSample = '/media/branches/temp.webp';

const branchesData = {
  western: {
    title: "Western Region",
    branches: [
      { name: "Negombo", location: "Negombo", contact: "+94 123 456 789", image: branchSample },
      { name: "Gampaha", location: "Gampaha", contact: "+94 234 567 890", image: branchSample },
      { name: "Kalutara", location: "Kalutara", contact: "+94 345 678 901", image: branchSample },
      { name: "Moratuwa", location: "Moratuwa", contact: "+94 456 789 012", image: branchSample },
      { name: "Wellawatta", location: "Wellawatta", contact: "+94 567 890 123", image: branchSample },
      { name: "Mathugama", location: "Mathugama", contact: "+94 678 901 234", image: branchSample },
      { name: "Kotahena", location: "Kotahena", contact: "+94 789 012 345", image: branchSample },
      { name: "Panadura", location: "Panadura", contact: "+94 890 123 456", image: branchSample },
      { name: "Mattakkuliya", location: "Mattakkuliya", contact: "+94 901 234 567", image: branchSample },
      { name: "Grandpass", location: "Grandpass", contact: "+94 012 345 678", image: branchSample },
      { name: "Elakanda", location: "Elakanda", contact: "+94 123 456 789", image: branchSample },
      { name: "Homagama", location: "Homagama", contact: "+94 234 567 890", image: branchSample },
      { name: "Dankotuwa", location: "Dankotuwa", contact: "+94 345 678 901", image: branchSample },
    ]
  },
  eastern: {
    title: "Eastern Region",
    branches: [
      { name: "Batticaloa", location: "Batticaloa", contact: "+94 123 456 789", image: branchSample },
      { name: "Chenkalady", location: "Chenkalady", contact: "+94 234 567 890", image: branchSample },
      { name: "Kalmunai", location: "Kalmunai", contact: "+94 345 678 901", image: branchSample },
      { name: "Sammanthurai", location: "Sammanthurai", contact: "+94 456 789 012", image: branchSample },
      { name: "Akkaraipattu", location: "Akkaraipattu", contact: "+94 567 890 123", image: branchSample },
      { name: "Valaichchenai", location: "Valaichchenai", contact: "+94 678 901 234", image: branchSample },
      { name: "Trincomalee", location: "Trincomalee", contact: "+94 789 012 345", image: branchSample },
      { name: "Kinniya", location: "Kinniya", contact: "+94 890 123 456", image: branchSample },
      { name: "Kaluwanchikudy", location: "Kaluwanchikudy", contact: "+94 901 234 567", image: branchSample },
      { name: "Pottuvil", location: "Pottuvil", contact: "+94 012 345 678", image: branchSample },
      { name: "Kanthale", location: "Kanthale", contact: "+94 123 456 789", image: branchSample },
      { name: "Thirukkovil", location: "Thirukkovil", contact: "+94 234 567 890", image: branchSample },
      { name: "Nintavur", location: "Nintavur", contact: "+94 345 678 901", image: branchSample },
    ]
  },
  southern: {
    title: "Southern Region",
    branches: [
      { name: "Galle", location: "Galle", contact: "+94 123 456 789", image: branchSample },
      { name: "Matara", location: "Matara", contact: "+94 234 567 890", image: branchSample },
      { name: "Beruwala", location: "Beruwala", contact: "+94 345 678 901", image: branchSample },
      { name: "Ambalantota", location: "Ambalantota", contact: "+94 456 789 012", image: branchSample },
      { name: "Elpitiya", location: "Elpitiya", contact: "+94 567 890 123", image: branchSample },
      { name: "Deniyaya", location: "Deniyaya", contact: "+94 678 901 234", image: branchSample },
    ]
  },
  northern: {
    title: "Northern Region",
    branches: [
      { name: "Jaffna", location: "Jaffna", contact: "+94 890 123 456", image: branchSample },
      { name: "Chavakachcheri", location: "Chavakachcheri", contact: "+94 901 234 567", image: branchSample },
      { name: "Point Pedro", location: "Point Pedro", contact: "+94 012 345 678", image: branchSample },
      { name: "Chunnakam", location: "Chunnakam", contact: "+94 123 456 789", image: branchSample },
      { name: "Nelliady", location: "Nelliady", contact: "+94 234 567 890", image: branchSample },
      { name: "Changani", location: "Changani", contact: "+94 345 678 901", image: branchSample },
      { name: "Velanai", location: "Velanai", contact: "+94 456 789 012", image: branchSample },
      { name: "Achchuveli", location: "Achchuveli", contact: "+94 567 890 123", image: branchSample },
      { name: "Manipay", location: "Manipay", contact: "+94 678 901 234", image: branchSample },
      { name: "Urumpirai", location: "Urumpirai", contact: "+94 789 012 345", image: branchSample },
      { name: "Kilinochchi", location: "Kilinochchi", contact: "+94 890 123 456", image: branchSample },
      { name: "Pudukuduirippu", location: "Pudukuduirippu", contact: "+94 901 234 567", image: branchSample },
      { name: "Mullaitivu", location: "Mullaitivu", contact: "+94 012 345 678", image: branchSample },
    ]
  },
  central: {
    title: "Central Region",
    branches: [
      { name: "Kandy", location: "Kandy", contact: "+94 123 456 000", image: branchSample },
      { name: "Nuwara Eliya", location: "Nuwara Eliya", contact: "+94 234 567 111", image: branchSample },
      { name: "Digana", location: "Digana", contact: "+94 345 678 222", image: branchSample },
      { name: "Hatton", location: "Hatton", contact: "+94 456 789 333", image: branchSample },
      { name: "Thalawakele", location: "Thalawakele", contact: "+94 567 890 444", image: branchSample },
      { name: "Nawalapitiya", location: "Nawalapitiya", contact: "+94 678 901 555", image: branchSample },
    ]
  },
  northwestern: {
    title: "North-Western Region",
    branches: [
      { name: "Kurunegala", location: "Kurunegala", contact: "+94 123 456 789", image: branchSample },
      { name: "Wennappuwa", location: "Wennappuwa", contact: "+94 234 567 890", image: branchSample },
      { name: "Chillow", location: "Chillow", contact: "+94 345 678 901", image: branchSample },
      { name: "Udappuwa", location: "Udappuwa", contact: "+94 456 789 012", image: branchSample },
      { name: "Puttalam", location: "Puttalam", contact: "+94 567 890 123", image: branchSample },
    ]
  }
};

export default branchesData;
