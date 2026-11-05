export type Dealer = {
  id: string;
  name: string;
  type: "Dealer" | "Distributor" | "Export Partner";
  phone?: string; // add later, e.g. "+91 98765 43210"
  address?: string;
  city: string;
  state: string;
};

export const DEALERS: Dealer[] = [
  { id: "d1", name: "SSAT Crank Parts", type: "Distributor", phone: "+91 7838958763", city: "Delhi", state: "Delhi" },
{ id: "d2", name: "Star Engg. Parts", type: "Distributor", phone: "+91 7869268942", city: "Indore", state: "Madhya Pradesh" },
{ id: "d3", name: "AIA Engg", type: "Distributor", phone: "+91 9826016348", city: "Bhopal", state: "Madhya Pradesh" },
{ id: "d4", name: "Shree Sharman Spares", type: "Distributor", phone: "+91 9872475559", city: "Ludhiana", state: "Punjab" },
{ id: "d5", name: "Auto Home", type: "Distributor", phone: "+91 9431865795", city: "Purnea", state: "Bihar" },
{ id: "d6", name: "Yaseen Automobiles", type: "Distributor", phone: "+91 9494586612", city: "Vijayawada", state: "Andhra Pradesh" },
{ id: "d7", name: "Adeeshwar Auto", type: "Distributor", phone: "+91 6399665052", city: "Agra", state: "Uttar Pradesh" },
{ id: "d8", name: "Burma Reboring", type: "Distributor", phone: "+91 8089650561", city: "Cochin", state: "Kerala" },
{ id: "d9", name: "Garg Auto", type: "Distributor", phone: "+91 8770179456", city: "Pathalgaon", state: "Chhattisgarh" },
{ id: "d10", name: "Sagar Auto", type: "Distributor", phone: "+91 9415402037", city: "Lucknow", state: "Uttar Pradesh" },
{ id: "d11", name: "Narang Traders", type: "Distributor", phone: "+91 9415441490", city: "Kanpur", state: "Uttar Pradesh" },
{ id: "d12", name: "Bablu Auto", type: "Distributor", phone: "+91 9837391145", city: "Meerut", state: "Uttar Pradesh" },
{ id: "d13", name: "Vipin Bhai", type: "Distributor", city: "Gopalganj", state: "Bihar" },
{ id: "d14", name: "SS Auto", type: "Distributor", phone: "+91 9778624890", city: "Cuttack", state: "Odisha" },
{ id: "d15", name: "Royal Touch", type: "Distributor", phone: "+91 9850619020", city: "Dhule", state: "Maharashtra" },
{ id: "d16", name: "Tirth Auto", type: "Distributor", phone: "+91 9819303141", city: "Mumbai", state: "Maharashtra" },
{ id: "d17", name: "Gulshan Auto", type: "Distributor", phone: "+91 9824128873", city: "Ahmedabad", state: "Gujarat" },
{ id: "d18", name: "Chand Lathe", type: "Distributor", phone: "+91 8252265140", city: "Ranchi", state: "Jharkhand" },
{ id: "d19", name: "Saifi Reboring", type: "Distributor", city: "Tundla", state: "Uttar Pradesh" },
{ id: "d20", name: "Mondal Engg", type: "Distributor", phone: "+91 9064204336", city: "Nadia", state: "West Bengal" },
{ id: "d21", name: "Agra Auto", type: "Distributor", address: "Balugunj", city: "Agra", state: "Uttar Pradesh" },
{ id: "d22", name: "Swami Auto", type: "Distributor", phone: "+91 9437258593", city: "Berhampur", state: "Odisha" },
{ id: "d23", name: "Indian Reboring", type: "Distributor", phone: "+91 9849350610", city: "Warangal", state: "Telangana" },
];