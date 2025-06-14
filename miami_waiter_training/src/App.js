import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/navbar/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// Admin imports
import AdminLayout from './pages/admin/Adminlayout';
import AdminDashboard from './pages/admin/Dashboard';
import Employees from './pages/admin/employees/Employees';
import CreateEmployee from './pages/admin/employees/CreateEmployee';
import ViewEmployee from './pages/admin/employees/ViewEmployee';
import EditEmployee from './pages/admin/employees/EditEmployee';
import DrinkRecipes from './pages/admin/drinkrecipes/DrinkRecipes';
import CreateDrinkRecipe from './pages/admin/drinkrecipes/CreateDrinkRecipe';
import ViewDrinkRecipe from './pages/admin/drinkrecipes/ViewDrinkRecipe';
import EditDrinkRecipe from './pages/admin/drinkrecipes/EditDrinkRecipe';
import DessertRecipes from './pages/admin/DessertRecipes';
import FoodRecipes from './pages/admin/FoodRecipes';

// Employee layout & dashboard
import EmployeeLayout from './pages/employee/EmployeeLayout';
import EmployeeDashboard from './pages/employee/Dashboard';
import Training from './pages/employee/training/Training';
import EmployeeCocktailRecipes from './pages/employee/employeecocktailrecipes/EmployeeCocktailRecipes';
import EmployeeViewCocktailRecipe from './pages/employee/employeecocktailrecipes/EmployeeViewCocktailRecipe';
import EmployeeEmployees from './pages/employee/employeeemployees/EmployeeEmployees';
import EmployeeProfile from './pages/employee/employeeprofile/EmployeeProfile';

// Training components
import BarTools from './components/bartools/BarTools';
import Beer from './components/beer/Beer';
import CocktailRecipes from './components/cocktailrecipes/CocktailRecipes';
import Coffee from './components/coffee/Coffee';
import CommunicationCodes from './components/communicationcodes/CommunicationCodes';
import DrinkCategories from './components/drinkcategories/DrinkCategories';
import Place from './components/place/Place';
import Rules from './components/rules/Rules';
import RulesPart2 from './components/rulespart2/RulesPart2';
import ServiceSteps from './components/servicesteps/ServiceSteps';
import SetupClosing from './components/setupclosing/SetupClosing';
import ThreePoints from './components/threepoints/ThreePoints';
import Values from './components/values/Values';
import Wine from './components/wine/Wine';

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees/create" element={<CreateEmployee />} />
          <Route path="employees/:id/view" element={<ViewEmployee />} />
          <Route path="employees/:id/edit" element={<EditEmployee />} />
          <Route path="drink-recipes" element={<DrinkRecipes />} />
          <Route path="drink-recipes/create" element={<CreateDrinkRecipe />} />
          <Route path="drink-recipes/:id/view" element={<ViewDrinkRecipe />} />
          <Route path="drink-recipes/:id/edit" element={<EditDrinkRecipe />} />
          <Route path="dessert-recipes" element={<DessertRecipes />} />
          <Route path="food-recipes" element={<FoodRecipes />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Employee routes */}
        <Route path="/employee" element={
          <ProtectedRoute role="employee">
            <EmployeeLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="training" element={<Training />} />
          <Route path="cocktail-recipes" element={<EmployeeCocktailRecipes />} />
          <Route path="cocktail-recipes/:id/view" element={<EmployeeViewCocktailRecipe />} />
          <Route path="employees" element={<EmployeeEmployees />} />
          <Route path="profile" element={<EmployeeProfile />} />

          {/* Training subpages */}
          <Route path="training/bartools" element={<BarTools />} />
          <Route path="training/beer" element={<Beer />} />
          <Route path="training/cocktailrecipes" element={<CocktailRecipes />} />
          <Route path="training/coffee" element={<Coffee />} />
          <Route path="training/communicationcodes" element={<CommunicationCodes />} />
          <Route path="training/drinkcategories" element={<DrinkCategories />} />
          <Route path="training/place" element={<Place />} />
          <Route path="training/rules" element={<Rules />} />
          <Route path="training/rulespart2" element={<RulesPart2 />} />
          <Route path="training/servicesteps" element={<ServiceSteps />} />
          <Route path="training/setupclosing" element={<SetupClosing />} />
          <Route path="training/threepoints" element={<ThreePoints />} />
          <Route path="training/values" element={<Values />} />
          <Route path="training/wine" element={<Wine />} />

          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
