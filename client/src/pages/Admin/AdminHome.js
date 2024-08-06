import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            The main aim of developing this system is to provide
            blood to thepeople who are in need of blood. The numbers of persons
            who are in need ofblood are increasing in large number day by day.
            Using this system usercan search blood group available in the city
            and he can also get contactnumber of the donor who has the same
            blood group he needs. In order tohelp people who are in need of
            blood. <br />
            To guarantee sufficient blood availability to meet demand and
            preserve lives, BD, therefore, plays a crucial role in healthcare
            systems. A highly well-organized internet healthcare system is
            needed in Arab nations, including our town. To isolate transmitted
            pathogens and provide safe and sufficient blood transfusion services
            to the public, an integrated blood adoption technique is necessary.
            The primary element of the plan will be to collect blood from
            willing donors, filter it for all communicable diseases, and reduce
            transfusions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;