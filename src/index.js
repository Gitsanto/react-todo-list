import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import TodosContainer from "./containers/TodosContainer";
import TodoDetailContainer from "./containers/TodoDetailContainer";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./style.css";

const items = [
  { name: "home", label: "Home" },
  {
    name: "billing",
    label: "Billing",
    items: [
      { name: "statements", label: "Statements" },
      { name: "reports", label: "Reports" }
    ]
  },
  {
    name: "settings",
    label: "Settings",
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance" },
      {
        name: "notifications",
        label: "Notifications",
        items: [
          { name: "email", label: "Email" },
          {
            name: "desktop",
            label: "Desktop",
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];

const App = () => (
  <div className="App">
    <div className="container">
      <Sidebar items={items} />
      <div className="mainPage">
        <BrowserRouter>
          <div>
            <nav>
              Navigation:
              <NavLink exact to="/">
                Todo list
              </NavLink>
            </nav>

            <main>
              <Switch>
                <Route exact path="/" component={TodosContainer} />
                <Route
                  exact
                  path="/todos/:id"
                  component={TodoDetailContainer}
                />
                <Route path="*" component={NotFound} />
                {/* <Redirect to="not-found" /> */}
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </div>
    <Footer />
  </div>
);

render(<App />, document.getElementById("root"));
