import React from "react";
import Olympic from "../../asset/image/Contest/olympic.png";
import Thang11 from "../../asset/image/Contest/thang11.jpg";
import Tkdh from "../../asset/image/Contest/tkdh.jpg";
// import Mua from '../../asset/image/Contest/mua.jpg'

import "../../asset/css/contest.css";
import "../../asset/css/GlobleStyle.css";
import { Link } from "react-router-dom";

const contest = [
  {
    id: 1,
    img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/332693565_3266409786837750_4585311153015214291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=15Q8q7oQBmEAX8CGyT-&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA8rBTpQinrcYh8ZXegQ4ZSFgcHI677YZJYEGLBHJ5a7g&oe=644C6CD5",
    nameContest: "Cuộc thi Olympic tin học",
    time: "12/03/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/340241820_153454477658899_4156421506680095406_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MYQCdaOcj6UAX-gzBAd&_nc_oc=AQniHklDluUWBqbl-axMf8oBsPLIBz_UbBDL9nwcDbCcSIWoUNavNW-HnCKtOMUAGu7RI6Dco3obHdMAJAnwy_Mi&_nc_ht=scontent.fhan2-5.fna&oh=00_AfANwZvLO5ZA8vADah2AGdP3M0m3ZFNgSENPOR8Ga3N8rw&oe=644B0853",
    nameContest: "Cuộc thi TOPCODER CONTEST 2023",
    time: "15/02/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/313399803_501951175303914_6999945684947151857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ksqV_l1Sls8AX9upPKG&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBTLl5yoqGXGXNfYGDi0IwkqSJ8cRaSqeujHPSTBjti0A&oe=644C32E6",
    nameContest: "Cuộc thi THÁNG 11 TRI ÂN",
    time: "22/10/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/330994927_871052617493154_7067510755070337522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OkZg7dRb7voAX8RhpNg&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBEQZ6sRYCpc2mTFzWLR2cIvGJY9_olurX3qbT5lPZC0w&oe=644AB9C5",
    nameContest: "Giải cầu lông sinh viên khoa CNTT",
    time: "20/02/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 5,
    img: Thang11,
    nameContest: "Cuộc thi Tháng 11 tri ân",
    time: "12/10/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 6,
    img: Tkdh,
    nameContest: "Cuộc thi thiết kế đồ họa",
    time: "12/12/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  // {
  //     id: 4,
  //     img: Mua,
  //     nameContest: 'Cuộc thi múa',
  //     time: '12/10/2022',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  // },
];
function Contest() {
  return (
    <div className="Contest">
      <div className="Title">
        <p>CÁC CUỘC THI</p>
      </div>
      <div className="main-contest">
        <div className="ListContest">
          {contest.map((item) => (
            <div key={item.id} className="card">
              <Link
                to={`/contest/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img className="img-top" src={item.img} alt="error"></img>
                <div className="body-card">
                  <h4 className="nameContest">{item.nameContest}</h4>
                  <div className="flex-time">
                    <div className="time">
                      <p className="p1-time">Thời gian: </p>
                      <p className="p2-time">{item.time}</p>
                    </div>
                    <Link
                      className="btn-view"
                      to={`/contest/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contest;
