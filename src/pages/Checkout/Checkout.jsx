import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price } = service;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const order = {
      customerName: name,
      service: _id,
      email,
      date,
      price,
    };

    console.log(order);
  };
  return (
    <div>
      <h2 className="text-3xl text-center">Books Services: {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="due ammount"
              className="input input-bordered"
              defaultValue={"$ " + price}
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-warning"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
