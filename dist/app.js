"use strict";
onload = function () {
    var elem = document.getElementById("submit");
    elem.addEventListener("click", function (event) {
        console.log("clicked add project button");
        addProject();
    });
    var activeProjects = getActiveProjects();
    console.log(activeProjects);
    if (activeProjects.length > 0) {
        createProjectCards(activeProjects);
    }
    function addProject() {
        setActiveProjects(getProjectData());
        var activeProjects = getActiveProjects();
        createProjectCard(activeProjects[activeProjects.length - 1]);
    }
    function getProjectData() {
        var title = document.getElementsByName("title")[0].value;
        var description = document.getElementsByName("description")[0].value;
        var peopleTask = document.getElementsByName("people")[0].value;
        return {
            title: title,
            description: description,
            peopleTask: peopleTask,
        };
    }
    function createProjectCards(activeProjects) {
        activeProjects.forEach(function (activeProject) {
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
        var id = event
            .dataTransfer
            .getData('text');
        console.log('onDrop is calling');
        var draggableElement = document.getElementById('finishedProjects');
        console.log(draggableElement);
        console.log(id);
        var dropzone = event.target;
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData();
    }
    var finishedProjectElem = document.getElementById('main__finishedprojects');
    console.log(finishedProjectElem);
    finishedProjectElem === null || finishedProjectElem === void 0 ? void 0 : finishedProjectElem.addEventListener('drop', onDrop, false);
    finishedProjectElem === null || finishedProjectElem === void 0 ? void 0 : finishedProjectElem.addEventListener('dragover', onDragOver, false);
    function createProjectCard(_a) {
        var title = _a.title, description = _a.description, peopleTask = _a.peopleTask;
        var card = document.createElement("div");
        var cardHeading = createElement("h3", title);
        card.append(cardHeading);
        var cardDescription = createElement("p", description);
        card.append(cardDescription);
        var cardPeopleTask = createElement("span", peopleTask);
        card.append(cardPeopleTask);
        card.classList.add("card");
        card.setAttribute("draggable", "true");
        card.addEventListener('dragstart', onDragStart, false);
        var rootElem = document
            .querySelector(".main__activeprojects")
            .getElementsByTagName("div")[0];
        rootElem.appendChild(card);
    }
};
