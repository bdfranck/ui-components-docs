import { GoABlock, GoADropdown, GoADropdownItem, GoASideMenu } from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LanguageContext } from "@components/sandbox";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export function Components() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-lang") || "react";
    setLanguage(lang);
  }, []);

  function onLanguageChange(_name: string, value: string[] | string) {
    const lang = Array.isArray(value) ? value[0] : value;
    setLanguage(lang);
    localStorage.setItem("goa-docs-lang", lang);
  }

  return (
    <LanguageContext.Provider value={language}>
      <section className="content">
        <section className="side-menu">
          <GoABlock direction="column" mt="s" mb="s" ml="l" mr="l">
            <GoADropdown value={language} onChange={onLanguageChange}>
              <GoADropdownItem label="React" value="react" />
              <GoADropdownItem label="Angular" value="angular" />
            </GoADropdown>
          </GoABlock>

          <GoASideMenu>
            <Link to="">All</Link>
            <Link to="accordion">Accordion</Link>
            <Link to="badge">Badge</Link>
            <Link to="block">Block</Link>
            <Link to="button">Button</Link>
            <Link to="button-group">Button group</Link>
            <Link to="callout">Callout</Link>
            <Link to="checkbox">Checkbox</Link>
            <Link to="container">Container</Link>
            <Link to="date-picker">Date picker</Link>
            <Link to="details">Details</Link>
            <Link to="divider">Divider</Link>
            <Link to="dropdown">Dropdown</Link>
            <Link to="file-uploader">File uploader</Link>
            <Link to="filter-chip">Filter chip</Link>
            <Link to="footer">Footer</Link>
            <Link to="form-item">Form item</Link>
            <Link to="form-stepper">Form stepper</Link>
            <Link to="grid">Grid</Link>
            <Link to="header">Header</Link>
            <Link to="hero-banner">Hero banner</Link>
            <Link to="icons">Icons</Link>
            <Link to="icon-button">Icon button</Link>
            <Link to="input">Input</Link>
            <Link to="list">List</Link>
            <Link to="microsite-header">Microsite header</Link>
            <Link to="modal">Modal</Link>
            <Link to="notification-banner">Notification banner</Link>
            <Link to="pagination">Pagination</Link>
            <Link to="popover">Popover</Link>
            <Link to="progress-indicator">Progress indicator</Link>
            <Link to="radio">Radio</Link>
            <Link to="side-menu">Side menu</Link>
            <Link to="skeleton-loader">Skeleton loading</Link>
            <Link to="spacer">Spacer</Link>
            <Link to="table">Table</Link>
            <Link to="tabs">Tabs</Link>
            <Link to="text">Text</Link>
            <Link to="text-area">Text area</Link>
            <Link to="tooltip">Tooltip</Link>
          </GoASideMenu>
        </section>

        <main className="main">
          <Outlet />
          <SupportInfo />
        </main>
      </section>
    </LanguageContext.Provider>
  );
}

export default Components;
