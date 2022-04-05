

 export const ipAddress = "https://ad59-110-93-85-113.ngrok.io";

 const GetProductList = "/api/Items/Item";

 const GetCatList = "/api/ItemCategories";

 const GetDetailEndPoint = "/api/Items/"

 const login = "/api/Auth/Login"

 const CreateSale ="/api/SaleItem"

 const GetSale = "/api/SaleItem"

 const CreateDamage = "/api/DamageReport"

 const GetDamage="/api/DamageReport"

 const GetExpenses="/api/Expenses"

export const GetProductUrl = ipAddress + GetProductList;

export const GetCat = ipAddress + GetCatList;

export const GetDetail = ipAddress + GetDetailEndPoint;

export const Login = ipAddress+login;

export const GetSaleEndPoint = ipAddress + GetSale;

export const CreateSaleEndPoint = ipAddress+CreateSale; 

export const CreateDamageEndPoint = ipAddress+CreateDamage;

export const GetDamageEndPoint = ipAddress + GetDamage;

export const GetExpensesEndpoint =ipAddress + GetExpenses;

export const CreateExpensesEndpoint = ipAddress + GetExpenses