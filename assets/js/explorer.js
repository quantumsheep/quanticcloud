const quanticCloud = angular.module('quanticCloud', []);

quanticCloud.controller('Explorer', ($scope, $http) => {
    $http.get("/get/1").then(response => {
        $scope.files = response.data;
    });
});

let isMenuActive = false;

document.addEventListener('contextmenu', e => {
    if (isMenuActive) {
        isMenuActive = false;
        document.getElementById("rmenu").classList.add("hide");
    } else {
        isMenuActive = true;
        document.getElementById("rmenu").classList.remove("hide");
        document.getElementById("rmenu").style.top = mouseY(e) + 'px';
        document.getElementById("rmenu").style.left = mouseX(e) + 'px';
    }

    e.preventDefault();
}, false);

document.addEventListener('click', e => {
    if (isMenuActive) {
        isMenuActive = false;
        document.getElementById("rmenu").classList.add("hide");

        e.preventDefault();
    }
}, false);

function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
        return evt.clientX + (document.documentElement.scrollLeft ?
            document.documentElement.scrollLeft :
            document.body.scrollLeft);
    } else {
        return null;
    }
}

function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
        return evt.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
    } else {
        return null;
    }
}