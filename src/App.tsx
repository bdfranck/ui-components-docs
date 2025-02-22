import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "@abgov/web-components";

import Root from "@routes/root";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { DeviceWidthContext } from "@contexts/DeviceWidthContext";
import "./index.css";

// Support

import HomePage from "@routes/home";

// Components

import ComponentsPage from "@routes/components/Components";

import AllComponentsPage from "@routes/components/AllComponents";
import AccordionPage from "@routes/components/Accordion.tsx";
import BadgePage from "@routes/components/Badge";
import BlockPage from "@routes/components/Block";
import ButtonGroupPage from "@routes/components/ButtonGroup";
import ButtonPage from "@routes/components/Button";
import CalloutPage from "@routes/components/Callout";
import CheckboxPage from "@routes/components/Checkbox";
import ComponentNotFoundPage from "@routes/not-found/NotFound";
import ContainerPage from "@routes/components/Container";
import DatePickerPage from "@routes/components/DatePicker";
import DetailsPage from "@routes/components/Details";
import DividerPage from "@routes/components/Divider";
import DropdownPage from "@routes/components/Dropdown";
import FileUploaderPage from "@routes/components/FileUploader";
import FilterChipPage from "@routes/components/FilterChip";
import FormItemPage from "@routes/components/FormItemPage.tsx";
import FormStepperPage from "@routes/components/FormStepper";
import GridPage from "@routes/components/Grid";
import HeroBannerPage from "@routes/components/HeroBanner";
import IconsPage from "@routes/components/Icons";
import IconButtonPage from "@routes/components/IconButton";
import ListPage from "@routes/components/List";
import ModalPage from "@routes/components/Modal";
import NotificationBannerPage from "@routes/components/Notificationbanner";
import PaginationPage from "@routes/components/Pagination";
import PopoverPage from "@routes/components/Popover";
import ProgressIndicatorPage from "@routes/components/ProgressIndicator";
import RadioPage from "@routes/components/Radio";
import SkeletonPage from "@routes/components/Skeleton.tsx";
import SpacerPage from "@routes/components/Spacer";
import TablePage from "@routes/components/Table";
import TabsPage from "@routes/components/Tabs.tsx";
import TooltipPage from "@routes/components/Tooltip";
import TextPage from "@routes/components/Text";
import TextFieldPage from "@routes/components/TextField";
import TextAreaPage from "@routes/components/TextArea";
import MicrositeHeaderPage from "@routes/components/MicrositeHeader";
import AppHeaderPage from "@routes/components/AppHeader";
import AppFooterPage from "@routes/components/AppFooter";
import SideMenuPage from "@routes/components/SideMenu";

// Design Tokens

import DesignTokensOverviewPage from "@routes/design-tokens/overview/Overview";
import BorderRadiusPage from "@routes/design-tokens/border-radius/BorderRadius";
import BorderWidthPage from "@routes/design-tokens/border-width/BorderWidth";
import ColorPage from "@routes/design-tokens/color/Color";
import DesignTokens from "@routes/design-tokens/DesignTokenLayout.tsx";
import IconSizePage from "@routes/design-tokens/icon-size/IconSize";
import OpacityPage from "@routes/design-tokens/opacity/Opacity";
import ShadowPage from "@routes/design-tokens/shadow/Shadow";
import SpacingPage from "@routes/design-tokens/spacing/Spacing";
import TypographyPage from "@routes/design-tokens/typography/Typography";

// Get Started

import DevelopersOverviewPage from "@routes/get-started/developers/DevelopersOverview";
import DevelopersSetupPage from "@routes/get-started/developers/DevelopersSetup";
import DevelopersTechnologiesPage from "@routes/get-started/developers/DevelopersTechnologies";
import DevelopersVSCodePage from "@routes/get-started/developers/DevelopersVSCode";
import BugVerificationPage from "@routes/get-started/developers/BugVerification";
import GetStartedLayout from "@routes/get-started/GetStartedLayout";
import GetStartedOverviewPage from "@routes/get-started/GetStartedOverview";
import QATestingOverviewPage from "@routes/get-started/qa-testing/QATestingOverview";
import ContributePage from "@routes/get-started/Contribute";
import SupportPage from "@routes/get-started/Support";
import RequestFeaturePage from "@routes/get-started/RequestFeature";
import ReportBugPage from "@routes/get-started/ReportBug";
import RoadmapPage from "@routes/get-started/Roadmap";
import SupportedBrowsersPage from "@routes/get-started/developers/SupportedBrowsers";
import UxDesignerPage from "@routes/get-started/designers/UxDesigner";

// Content Pages

import ContentLayout from "@routes/content/ContentLayout";
import CapitalizationPage from "@routes/content/Capitalization";
import DateFormatPage from "@routes/content/DateFormat";
import ErrorMessagesPage from "@routes/content/ErrorMessages";
import HelperTextPage from "@routes/content/HelperText";
import UserExperienceGuidelinesPage from "@routes/get-started/UserExperienceGuidelines";

// Patterns Pages

import PatternsLayout from "@routes/patterns/PatternsLayout";
import LayoutPage from "@routes/patterns/LayoutPage";
import PatternsOverviewPage from "@routes/patterns/PatternsOverview";
import SimpleFormPage from "@routes/patterns/SimpleFormPage";
import StartPage from "@routes/patterns/StartPage";
import TaskListPage from "@routes/patterns/TaskListPage";
import QuestionPage from "@routes/patterns/QuestionPage";
import ReviewPage from "@routes/patterns/ReviewPage";
import ResultPage from "@routes/patterns/ResultPage";

interface DeviceWidthProviderProps {
  children: ReactNode;
}

const DeviceWidthProvider: React.FC<DeviceWidthProviderProps> = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1232px)");
  const isMobile = useMediaQuery("(max-width: 623px)");

  return (
    <DeviceWidthContext.Provider value={{ isDesktop, isMobile }}>
      {children}
    </DeviceWidthContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route
        path="components"
        element={<ComponentsPage />}
        errorElement={<ComponentNotFoundPage />}>
        <Route index element={<AllComponentsPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="header" element={<AppHeaderPage />} />
        <Route path="footer" element={<AppFooterPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="block" element={<BlockPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="button-group" element={<ButtonGroupPage />} />
        <Route path="callout" element={<CalloutPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="container" element={<ContainerPage />} />
        <Route path="date-picker" element={<DatePickerPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="divider" element={<DividerPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="file-uploader" element={<FileUploaderPage />} />
        <Route path="filter-chip" element={<FilterChipPage />} />
        <Route path="form-item" element={<FormItemPage />} />
        <Route path="form-stepper" element={<FormStepperPage />} />
        <Route path="grid" element={<GridPage />} />
        <Route path="hero-banner" element={<HeroBannerPage />} />
        <Route path="icons" element={<IconsPage />} />
        <Route path="icon-button" element={<IconButtonPage />} />
        <Route path="input" element={<TextFieldPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="microsite-header" element={<MicrositeHeaderPage />} />
        <Route path="modal" element={<ModalPage />} />
        <Route path="notification-banner" element={<NotificationBannerPage />} />
        <Route path="pagination" element={<PaginationPage />} />
        <Route path="popover" element={<PopoverPage />} />
        <Route path="progress-indicator" element={<ProgressIndicatorPage />} />
        <Route path="radio" element={<RadioPage />} />
        <Route path="side-menu" element={<SideMenuPage />} />
        <Route path="skeleton-loader" element={<SkeletonPage />} />
        <Route path="spacer" element={<SpacerPage />} />
        <Route path="table" element={<TablePage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="text" element={<TextPage />} />
        <Route path="text-area" element={<TextAreaPage />} />
        <Route path="tooltip" element={<TooltipPage />} />
        <Route path="text-field" element={<TextFieldPage />} />
        <Route path="*" element={<ComponentNotFoundPage />} />
      </Route>

      <Route
        path="design-tokens"
        element={<DesignTokens />}
        errorElement={<ComponentNotFoundPage />}>
        <Route index element={<DesignTokensOverviewPage />} />
        <Route path="border-width" element={<BorderWidthPage />} />
        <Route path="border-radius" element={<BorderRadiusPage />} />
        <Route path="color" element={<ColorPage />} />
        <Route path="icon-size" element={<IconSizePage />} />
        <Route path="opacity" element={<OpacityPage />} />
        <Route path="shadow" element={<ShadowPage />} />
        <Route path="spacing" element={<SpacingPage />} />
        <Route path="typography" element={<TypographyPage />} />
      </Route>

      <Route path="get-started" element={<GetStartedLayout />}>
        <Route index element={<GetStartedOverviewPage />} />
        <Route path="designers">
          <Route index element={<UxDesignerPage />} />
        </Route>
        <Route path="developers">
          <Route index element={<DevelopersOverviewPage />} />
          <Route path="browsers" element={<SupportedBrowsersPage />} />
          <Route path="setup" element={<DevelopersSetupPage />} />
          <Route path="technologies" element={<DevelopersTechnologiesPage />} />
          <Route path="vscode" element={<DevelopersVSCodePage />} />
          <Route path="bug" element={<BugVerificationPage />} />
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATestingOverviewPage />} />
        </Route>
        <Route path="contribute">
          <Route index element={<ContributePage />} />
        </Route>
        <Route path="support">
          <Route index element={<SupportPage />} />
          <Route path="report-bug" element={<ReportBugPage />} />
          <Route path="request-feature" element={<RequestFeaturePage />} />
        </Route>
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="user-experience-guidelines" element={<UserExperienceGuidelinesPage />} />
      </Route>

      <Route path="content" element={<ContentLayout />}>
        <Route path="capitalization">
          <Route index element={<CapitalizationPage />} />
        </Route>
        <Route path="date-format" element={<DateFormatPage />} />
        <Route path="error-messages" element={<ErrorMessagesPage />} />
        <Route path="helper-text" element={<HelperTextPage />} />
      </Route>

      <Route path="patterns" element={<PatternsLayout />} errorElement={<ComponentNotFoundPage />}>
        <Route index element={<PatternsOverviewPage />} />
        <Route path="simple-form" element={<SimpleFormPage />} />
        <Route path="layout" element={<LayoutPage />} />
        <Route path="start-page" element={<StartPage />} />
        <Route path="task-list-page" element={<TaskListPage />} />
        <Route path="question-page" element={<QuestionPage />} />
        <Route path="review-page" element={<ReviewPage />} />
        <Route path="result-page" element={<ResultPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DeviceWidthProvider>
      <RouterProvider router={router} />
    </DeviceWidthProvider>
  </React.StrictMode>
);
