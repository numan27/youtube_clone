import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
   
   <Link to="/" style={{ display: "flex", alignItems: "center", color: 'white'}}>
      <img src={logo} alt="logo" height={45} /> <span style={{marginLeft: '10px', fontWeight: 'bolder', fontSize: '28px'}}>QuickWatch</span> 
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;