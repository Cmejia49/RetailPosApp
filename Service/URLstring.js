import React from 'react'

 const ipAddress = "https://68aa-110-93-86-169.ngrok.io";

 const GetProductList = "/api/Items/Item";

 const GetCatList = "/api/ItemCategories";

 const GetDetailEndPoint = "/api/Items/"

 const login = "/api/Auth/Login"

 const CreateSale ="/api/SaleItem"

 const GetSale = "/api/SaleItem"

 const CreateDamage = "/api/DamageReport"

 const GetDamage="/api/DamageReport"

export const GetProductUrl = ipAddress + GetProductList;

export const GetCat = ipAddress + GetCatList;

export const GetDetail = ipAddress + GetDetailEndPoint;

export const Login = ipAddress+login;

export const GetSaleEndPoint = ipAddress + GetSale;

export const CreateSaleEndPoint = ipAddress+CreateSale; 

export const CreateDamageEndPoint = ipAddress+CreateDamage;

export const GetDamageEndPoint = ipAddress + GetDamage;