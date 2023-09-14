import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Contacts = lazy(() => import("./contactlist/Contacts"));
const ContactsAdd = lazy(() => import("./contactlist/ContactsAdd"));
const ContactsEdit = lazy(() => import("./contactlist/ContactsEdit"));
const ContactList = lazy(() => import("./contactlist/ContactList"));
const ContactListAdd = lazy(() => import("./contactlist/ContactListAdd"));
const ContactListView = lazy(() => import("./contactlist/ContactListView"));
const ContactListEdit = lazy(() => import("./contactlist/ContactListEdit"));
const ContactListDelete = lazy(() => import("./contactlist/ContactListDelete"));

const Callback = lazy(() => import("./callback/Callback"));

const Voicemail = lazy(() => import("./voicemail/Voicemail"));
// const ContactAdd = lazy(() => import("./contactlist/ContactAdd"));

const Parkedcall = lazy(() => import("./parkedcalls/Parkedcall"));
const Ticket = lazy(() => import("./tickets/Ticket"));

const Recording = lazy(() => import("./recordings/Recording"));

const QualityFeedback = lazy(() =>
  import("./quality-feedback/QualityFeedback")
);

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Lockscreen = lazy(() => import("./user-pages/Lockscreen"));

const BlankPage = lazy(() => import("./general-pages/BlankPage"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contact/add" component={ContactsAdd} />
          <Route exact path="/contact/:contactBookId/edit" component={ContactsEdit} />
          <Route exact path="/contacts/:contactBookId" component={ContactList} />
          <Route exact path="/contact-list/:id/add" component={ContactListAdd} />
          <Route exact path="/contact-list/:id/edit" component={ContactListEdit} />
          <Route exact path="/contact-list/:id/view" component={ContactListView} />
          <Route exact path="/contact-list/:id/delete" component={ContactListDelete} />
          <Route exact path="/callbacks" component={Callback} />
          <Route exact path="/voicemails" component={Voicemail} />
          <Route exact path="/parkedcalls" component={Parkedcall} />
          <Route exact path="/tikets" component={Ticket} />
          <Route exact path="/recordings" component={Recording} />
          <Route exact path="/quality-feedback" component={QualityFeedback} />
          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />
          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/icons/mdi" component={Mdi} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />
          <Route path="/user-pages/lockscreen" component={Lockscreen} />
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          <Route path="/general-pages/blank-page" component={BlankPage} />
          <Redirect to="/contacts" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
