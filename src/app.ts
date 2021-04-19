onload = () => {

  interface IActiveProject {
    title: HTMLHeadingElement,
    description: HTMLParagraphElement,
    peopleTask: HTMLSpanElement
  }

  interface IActiveProjects extends Array<IActiveProject>{}

  let elem : HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
  
  elem.addEventListener("click", (event) => {
    console.log("clicked add project button");
    addProject();
  });

  let activeProjects : IActiveProjects = getActiveProjects();
  console.log(activeProjects);
  if (activeProjects.length > 0) {
    createProjectCards(activeProjects);
  }

  function addProject() : void {
  setActiveProjects(getProjectData());
  let activeProjects = getActiveProjects();
  createProjectCard(activeProjects[activeProjects.length - 1]);
}

function getProjectData() : IActiveProject{
  const title = document.getElementsByName("title")[0].value;
  const description = document.getElementsByName("description")[0].value;
  const peopleTask = document.getElementsByName("people")[0].value;

  return {
    title,
    description,
    peopleTask,
  };
}

function createProjectCards(activeProjects) {
  activeProjects.forEach((activeProject) => {
    createProjectCard(activeProject);
  });
}

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
  console.log('On drag over is working');
}

function onDrop(event) {
  console.log(event);
  const id = event
    .dataTransfer
    .getData('text');

  console.log('onDrop is calling');

  const draggableElement = document.getElementById('finishedProjects');
  console.log(draggableElement);
  console.log(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();
}

let finishedProjectElem = document.getElementById('main__finishedprojects');
console.log(finishedProjectElem);
finishedProjectElem?.addEventListener('drop', onDrop, false);
finishedProjectElem?.addEventListener('dragover', onDragOver, false);

function createProjectCard({ title, description, peopleTask }) {
  let card = document.createElement("div");

  let cardHeading = createElement("h3", title);
  card.append(cardHeading);
  let cardDescription = createElement("p", description);
  card.append(cardDescription);
  let cardPeopleTask = createElement("span", peopleTask);
  card.append(cardPeopleTask);

  card.classList.add("card");
  card.setAttribute("draggable", "true");
  card.addEventListener('dragstart', onDragStart, false);
  let rootElem = document
    .querySelector(".main__activeprojects")
    .getElementsByTagName("div")[0];
  
  rootElem.appendChild(card);
}
};


