import {
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAAppFooterNavSection,
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css";

import { useLocation } from "react-router-dom";

export const MAX_CONTENT_WIDTH = "1360px";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {
  const [visible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 50);
  });

  return (
    <div className="app" style={{ opacity: visible ? "1" : "0" }}>
      <ScrollToTop />
      <GoAOneColumnLayout>
        <section className="header" slot="header">
          <GoAMicrositeHeader
            type={"live"}
            feedbackUrl="https://forms.microsoft.com/r/8Zp7zSJS6W"
            maxContentWidth={MAX_CONTENT_WIDTH}
          />
          <GoAAppHeader heading="Design system" maxContentWidth={MAX_CONTENT_WIDTH} url={"/"} fullMenuBreakpoint={1140}>
            <Link to="/get-started">Get started</Link>
            <Link to="/patterns">Patterns</Link>
            <Link to="/components">Components</Link>
            <Link to="/design-tokens">Styles</Link>
            <Link to="/content/capitalization">Content</Link>
            <Link to="/get-started/support">Support</Link>
          </GoAAppHeader>
        </section>

        <Outlet />

        <section slot="footer">
          <GoAAppFooter maxContentWidth={MAX_CONTENT_WIDTH}>
            <GoAAppFooterNavSection heading="Resources" maxColumnCount={2}>
              <Link to="/get-started">Get started</Link>
              <Link to="/patterns">Patterns</Link>
              <Link to="/components">Components</Link>
              <Link to="/design-tokens">Styles</Link>
              <Link to="/content/capitalization">Content</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterNavSection heading="Get support">
              <Link to="https://design.alberta.ca/get-started/support/report-bug" target="_blank">Submit an issue</Link>
              <Link to="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterMetaSection>
              <Link to="support/contribute">Contribute to the design system</Link>
              <Link to="https://forms.microsoft.com/pages/responsepage.aspx?id=Bhy1K5uvxUKL9Tw7exCFCy-G9FVGUGFMnXc6L30n_ANUM0dTOFg4UU01VVY2QzJPT0k1Qzg2RUJMUy4u" target="_blank">Give feedback</Link>
              <Link to="/support/release-notes">Release notes</Link>
            </GoAAppFooterMetaSection>
          </GoAAppFooter>
        </section>
      </GoAOneColumnLayout>
    </div>
  );
}
