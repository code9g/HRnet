import { useSelector } from "react-redux";
import { departmentsAdapter } from "./slices/departmentsSlice";
import { employeesAdapter } from "./slices/employeesSlice";
import { statesAdapter } from "./slices/statesSlice";

const { selectAll: employeesSelectAll, selectById: employeesSelectById } =
  employeesAdapter.getSelectors();

export const useEmployeesSelector = () =>
  useSelector((state) => employeesSelectAll(state.employees));

export const useEmployeeSelector = (id) =>
  useSelector((state) => employeesSelectById(state.employees, id));

const { selectAll: statesSelectAll } = statesAdapter.getSelectors();

export const useStatesSelector = () =>
  useSelector((state) => statesSelectAll(state.states));

const { selectAll: departmentsSelectAll } = departmentsAdapter.getSelectors();

export const useDepartmentsSelector = () =>
  useSelector((state) => departmentsSelectAll(state.departments));

export const useConfigSelector = () => useSelector((state) => state.config);
