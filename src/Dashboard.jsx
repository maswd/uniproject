import React from "react";

function Dashboard() {
  return (
    <main className="container">

      <div class="row g-5">
        <form class="needs-validation was-validated" novalidate="" />
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">
              Email <span class="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="col-md-5">
            <label for="country" class="form-label">
              Country
            </label>
            <select class="form-select" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">
              State
            </label>
            <select class="form-select" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>

          <div class="col-md-3">
            <label for="zip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="zip"
              placeholder=""
              required=""
            />
            <div class="invalid-feedback">Zip code required.</div>
          </div>
        </div>

        <hr class="my-4" />


        <button class="w-100 btn btn-primary btn-lg" type="submit">
          Continue to checkout
        </button>
      </div>
    </main>
  );
}

export default Dashboard;
