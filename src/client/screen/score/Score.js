import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import "./Score.css";
import { Header, Footer } from "../../../components/index.component";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../redux/slice/login";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { MenuItem, TextField } from "@mui/material";
//nested data is ok, see accessorKeys in ColumnDef below

function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(loginSelector.currentUser);
  const token = useSelector(loginSelector.currentToken);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user === null) {
      swal({
        title: "Vui lòng đăng nhập để xem điểm",
        text: "",
        icon: "warning",
        button: "OK",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [user, location]);

  useEffect(() => {
    const getTableData = async () => {
      await axios
        .get("https://large-waves-production.up.railway.app/api/score/user/findAll", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setData(res.data.list);
        });
    };
    getTableData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnFilter: false,
      },
      {
        accessorKey: "idStudent",
        header: "Mã sinh viên",
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "fullName",
        header: "Họ và tên",
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "khoas",
        header: "Khóa",
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            {/*@ts-ignore*/}
            <MenuItem value={null}>All</MenuItem>
            <MenuItem value="13">13</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="16">16</MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "nganh",
        header: "Ngành",
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            {/*@ts-ignore*/}
            <MenuItem value={null}>All</MenuItem>
            <MenuItem value="Công nghệ thông tin">Công nghệ thông tin</MenuItem>
            <MenuItem value="Công nghệ thông tin - Chất lượng">
              Công nghệ thông tin - Chất lượng
            </MenuItem>
            <MenuItem value="Mang máy tính & TTDL">
              Mang máy tính & TTDL
            </MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "address",
        header: "Cơ sở",
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            {/*@ts-ignore*/}
            <MenuItem value={null}>All</MenuItem>
            <MenuItem value="Hà Nội">Hà Nội</MenuItem>
            <MenuItem value="Nam Định">Nam Định</MenuItem>
          </TextField>
        ),
        // filterFn: (row, _columnIds, filterValue) =>
        //     row.getValue < string > ('basis').toLowerCase() ===
        //     filterValue.toLowerCase(),
      },
      {
        accessorKey: "classz",
        header: "Lớp",
        enableColumnFilter: true,
      },
      {
        accessorKey: "averageScore",
        header: "Điểm trung bình",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <div className="container-score">
      <Header></Header>
      <div className="container-scores">
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          enableFullScreenToggle={false}
          initialState={{ showColumnFilters: true }}
          enableHiding={false}
          enableDensityToggle={false}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Example;
