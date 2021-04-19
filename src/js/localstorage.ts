function setActiveProjects(activeProjects) {
  let existingActiveProjects = getActiveProjects();
  console.log(existingActiveProjects);
  existingActiveProjects.push(JSON.parse(JSON.stringify(activeProjects)));
  window.localStorage.setItem(
    "activeProjects",
    JSON.stringify(existingActiveProjects)
  );
}

function getActiveProjects() {
  const activeProjects = window.localStorage.getItem("activeProjects");
  if (activeProjects == null || activeProjects == "undefined") return [];
  return JSON.parse(activeProjects);
}

function setFinishedProjects(finishedProjects) {
  window.localStorage.setItem(
    "finishedProjects",
    JSON.stringify(finishedProjects)
  );
}

function getFinishedProjects() {
  return JSON.parse(window.localStorage.getItem("finishedProjects"));
}
