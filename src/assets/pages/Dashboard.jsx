import Patients from "../pages/Patients";

const Dashboard = () => {
  return (
          <div className="col-10 bg-secondary-subtle vh-100 px-0">
            <div className="bg-white py-3 mb-5">
              <i className="bi bi-key-fill fs-4 me-2" />
            </div>

            <Patients />
          </div>
  );
};

export default Dashboard;
