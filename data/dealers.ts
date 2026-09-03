export type Dealer = {
  id: string;
  name: string;
  type: "Dealer" | "Distributor" | "Export Partner";
  phone: string;
  address: string;
  city: string;
  state: string;
};

// Dummy/placeholder data — replace with real dealer list when available.
export const DEALERS: Dealer[] = [
  { id: "d1", name: "Agarwal Auto Spares", type: "Distributor", phone: "+91 90000 00001", address: "Shop 12, Foundry Nagar Market", city: "Agra", state: "Uttar Pradesh" },
  { id: "d2", name: "Shree Krishna Motors", type: "Dealer", phone: "+91 90000 00002", address: "Sadar Bazar Road", city: "Agra", state: "Uttar Pradesh" },
  { id: "d3", name: "Lucknow Piston Traders", type: "Dealer", phone: "+91 90000 00003", address: "Aminabad Market", city: "Lucknow", state: "Uttar Pradesh" },
  { id: "d4", name: "Kanpur Auto Hub", type: "Distributor", phone: "+91 90000 00004", address: "Naveen Market", city: "Kanpur", state: "Uttar Pradesh" },
  { id: "d5", name: "Capital Auto Parts", type: "Distributor", phone: "+91 90000 00005", address: "Karol Bagh", city: "Delhi", state: "Delhi NCR" },
  { id: "d6", name: "Noida Engine Components", type: "Dealer", phone: "+91 90000 00006", address: "Sector 63 Industrial Area", city: "Noida", state: "Delhi NCR" },
  { id: "d7", name: "Gurugram Spares Co.", type: "Dealer", phone: "+91 90000 00007", address: "Udyog Vihar Phase 3", city: "Gurugram", state: "Delhi NCR" },
  { id: "d8", name: "Bombay Auto Traders", type: "Distributor", phone: "+91 90000 00008", address: "Lamington Road", city: "Mumbai", state: "Maharashtra" },
  { id: "d9", name: "Pune Piston House", type: "Dealer", phone: "+91 90000 00009", address: "Shivaji Nagar Market", city: "Pune", state: "Maharashtra" },
  { id: "d10", name: "Nagpur Auto Zone", type: "Dealer", phone: "+91 90000 00010", address: "Itwari Market", city: "Nagpur", state: "Maharashtra" },
  { id: "d11", name: "Pink City Motors", type: "Distributor", phone: "+91 90000 00011", address: "MI Road", city: "Jaipur", state: "Rajasthan" },
  { id: "d12", name: "Jodhpur Spare Parts Co.", type: "Dealer", phone: "+91 90000 00012", address: "Sojati Gate Market", city: "Jodhpur", state: "Rajasthan" },
  { id: "d13", name: "Ahmedabad Piston Corner", type: "Distributor", phone: "+91 90000 00013", address: "Ashram Road", city: "Ahmedabad", state: "Gujarat" },
  { id: "d14", name: "Surat Auto Traders", type: "Dealer", phone: "+91 90000 00014", address: "Ring Road Market", city: "Surat", state: "Gujarat" },
  { id: "d15", name: "Ludhiana Engine Parts", type: "Distributor", phone: "+91 90000 00015", address: "Gill Road Industrial Area", city: "Ludhiana", state: "Punjab" },
  { id: "d16", name: "Amritsar Auto Spares", type: "Dealer", phone: "+91 90000 00016", address: "Hall Bazar", city: "Amritsar", state: "Punjab" },
  { id: "d17", name: "Patna Piston Hub", type: "Dealer", phone: "+91 90000 00017", address: "Ashok Rajpath", city: "Patna", state: "Bihar" },
  { id: "d18", name: "Kolkata Motor Traders", type: "Distributor", phone: "+91 90000 00018", address: "Bowbazar Street", city: "Kolkata", state: "West Bengal" },
  { id: "d19", name: "Chennai Auto Components", type: "Distributor", phone: "+91 90000 00019", address: "Anna Salai", city: "Chennai", state: "Tamil Nadu" },
  { id: "d20", name: "Coimbatore Spares Co.", type: "Dealer", phone: "+91 90000 00020", address: "RS Puram Market", city: "Coimbatore", state: "Tamil Nadu" },
  { id: "d21", name: "Bengaluru Piston World", type: "Distributor", phone: "+91 90000 00021", address: "SP Road", city: "Bengaluru", state: "Karnataka" },
  { id: "d22", name: "Gulf Auto Exports LLC", type: "Export Partner", phone: "+971 50 000 0022", address: "Deira Auto Market", city: "Dubai", state: "UAE" },
  { id: "d23", name: "Colombo Spare Traders", type: "Export Partner", phone: "+94 77 000 0023", address: "Pettah Market", city: "Colombo", state: "Sri Lanka" },
];