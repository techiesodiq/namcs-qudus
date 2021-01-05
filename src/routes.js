import React from "react";
import $ from "jquery";
import MicroPension from "./Demo/Miscellaneous/MicroPension";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard/Default"));

const UIBasicButton = React.lazy(() =>
	import("./Demo/UIElements/Basic/Button")
);
const UIBasicBadges = React.lazy(() =>
	import("./Demo/UIElements/Basic/Badges")
);
const UIBasicBreadcrumbPagination = React.lazy(() =>
	import("./Demo/UIElements/Basic/BreadcrumbPagination")
);

const UIBasicCollapse = React.lazy(() =>
	import("./Demo/UIElements/Basic/Collapse")
);
const UIBasicTabsPills = React.lazy(() =>
	import("./Demo/UIElements/Basic/TabsPills")
);
const UIBasicBasicTypography = React.lazy(() =>
	import("./Demo/UIElements/Basic/Typography")
);

const FormsElements = React.lazy(() => import("./Demo/Forms/FormsElements"));

const AgricbusinessConnect = React.lazy(() =>
	import("./Demo/Miscellaneous/Agricbusiness")
);

const LoanApplication = React.lazy(() =>
	import("./Demo/Miscellaneous/LoanApplication")
);

const HirePurchase = React.lazy(() =>
	import("./Demo/Miscellaneous/HirePurchase")
);

const Investment = React.lazy(() => import("./Demo/Miscellaneous/Investment"));

const Guarantors = React.lazy(() => import("./Demo/Miscellaneous/Guarantors"));

const EmpowerTrainingCalendar = React.lazy(() =>
	import("./Demo/Miscellaneous/EmpowerTraining")
);

const FarmerLiteracy = React.lazy(() =>
	import("./Demo/Miscellaneous/FarmerLiteracy")
);

const ELearning = React.lazy(() => import("./Demo/Miscellaneous/ELearning"));

const SpecialEvent = React.lazy(() =>
	import("./Demo/Miscellaneous/SpecialEvent")
);

const XLifeProgram = React.lazy(() =>
	import("./Demo/Miscellaneous/XLifeCover")
);

const Pension = React.lazy(() =>
	import("./Demo/Miscellaneous/MicroPension")
);

const ContactAdmin = React.lazy(() =>
	import("./Demo/Miscellaneous/ContactAdmin")
);

const BootstrapTable = React.lazy(() => import("./Demo/Tables/BootstrapTable"));

const Nvd3Chart = React.lazy(() => import("./Demo/Charts/Nvd3Chart/index"));

const GoogleMap = React.lazy(() => import("./Demo/Maps/GoogleMap/index"));

const OtherSamplePage = React.lazy(() => import("./Demo/Other/SamplePage"));
const OtherDocs = React.lazy(() => import("./Demo/Other/Docs"));

const routes = [
	{
		path: "/dashboard/default",
		exact: true,
		name: "Default",
		component: DashboardDefault,
	},
	{
		path: "/basic/button",
		exact: true,
		name: "Basic Button",
		component: UIBasicButton,
	},
	{
		path: "/basic/badges",
		exact: true,
		name: "Basic Badges",
		component: UIBasicBadges,
	},
	{
		path: "/basic/breadcrumb-paging",
		exact: true,
		name: "Basic Breadcrumb Pagination",
		component: UIBasicBreadcrumbPagination,
	},
	{
		path: "/basic/collapse",
		exact: true,
		name: "Basic Collapse",
		component: UIBasicCollapse,
	},
	{
		path: "/basic/tabs-pills",
		exact: true,
		name: "Basic Tabs & Pills",
		component: UIBasicTabsPills,
	},
	{
		path: "/basic/typography",
		exact: true,
		name: "Basic Typography",
		component: UIBasicBasicTypography,
	},
	{
		path: "/forms/form-basic",
		exact: true,
		name: "Forms Elements",
		component: FormsElements,
	},
	{
		path: "/forms/message-form",
		exact: true,
		name: "Forms Elements",
		component: FormsElements,
	},
	{
		path: "/forms/loan-application",
		exact: true,
		name: "Forms Elements",
		component: LoanApplication,
	},
	{
		path: "/forms/hire-purchase",
		exact: true,
		name: "Forms Elements",
		component: HirePurchase,
	},
	{
		path: "/forms/investment",
		exact: true,
		name: "Forms Elements",
		component: Investment,
	},
	{
		path: "/guarantors",
		exact: true,
		name: "Forms Elements",
		component: Guarantors,
	},
	{
		path: "/contact-admin",
		exact: true,
		name: "Forms Elements",
		component: ContactAdmin,
	},
	{
		path: "/agricbusiness-connect",
		exact: true,
		name: "Forms Elements",
		component: AgricbusinessConnect,
	},
	{
		path: "/welfare/x-life",
		exact: true,
		name: "Forms Elements",
		component: XLifeProgram,
	},
	{
		path: "/welfare/micro-pension",
		exact: true,
		name: "Forms Elements",
		component: MicroPension,
	},
	{
		path: "/capacity-building/empower-training-calendar",
		exact: true,
		name: "Forms Elements",
		component: EmpowerTrainingCalendar,
	},
	{
		path: "/capacity-building/farmer-literacy",
		exact: true,
		name: "Forms Elements",
		component: FarmerLiteracy,
	},
	{
		path: "/capacity-building/elearning",
		exact: true,
		name: "Forms Elements",
		component: ELearning,
	},
	{
		path: "/capacity-building/special-event",
		exact: true,
		name: "Forms Elements",
		component: SpecialEvent,
	},
	{
		path: "/business-support/grant-opportunities",
		exact: true,
		name: "Forms Elements",
		component: FormsElements,
	},
	{
		path: "/business-support/government-support-program",
		exact: true,
		name: "Forms Elements",
		component: FormsElements,
	},
	{
		path: "/business-support/professional-guidance-and-mentorship",
		exact: true,
		name: "Forms Elements",
		component: FormsElements,
	},
	{
		path: "/tables/bootstrap",
		exact: true,
		name: "Bootstrap Table",
		component: BootstrapTable,
	},
	{
		path: "/charts/nvd3",
		exact: true,
		name: "Nvd3 Chart",
		component: Nvd3Chart,
	},
	{
		path: "/maps/google-map",
		exact: true,
		name: "Google Map",
		component: GoogleMap,
	},
	{
		path: "/sample-page",
		exact: true,
		name: "Sample Page",
		component: OtherSamplePage,
	},
	{ path: "/docs", exact: true, name: "Documentation", component: OtherDocs },
];

export default routes;
