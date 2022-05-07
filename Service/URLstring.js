

 export const ipAddress = "https://1106-110-93-84-79.ngrok.io";

 const GetProductList = "/api/v1/Item/item";

 const GetCatList = "/api/v1/Category";

 const GetDetailEndPoint = "/api/v1/Items/"

 const login = "/api/v1/Auth/Login"

 const CreateSale ="/api/v1/SaleItem"

 const GetSale = "/api/v1/SaleItem"

 const CreateDamage = "/api/v1/DamageReport"

 const GetDamage="/api/v1/DamageReport"

 const GetExpenses="/api/v1/Expenses"

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