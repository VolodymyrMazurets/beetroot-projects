(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  var toggle = document.getElementById("toggle");
  var adult = document.getElementById("adult");
  var input = document.getElementById("input");
  var text = document.getElementById("test_text");
  input.addEventListener("input", function () {
    text.innerText = input.value;
  });
  toggle.addEventListener("change", function () {
    // if (toggle.checked) {
    //   adult.classList.remove("hidden");
    // } else {
    //   adult.classList.add("hidden");
    // }
    toggle.checked ? adult.classList.remove("hidden") : adult.classList.add("hidden"); // switch (true) {
    //   case toggle.checked:
    //     adult.classList.remove("hidden")
    //   default:
    //     adult.classList.add("hidden");
    // }
  });
})();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9zdGFydC9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVk7QUFDWCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBRUEsRUFBQSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQyxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLEtBQUssQ0FBQyxLQUF2QjtBQUNELEdBRkQ7QUFJQSxFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0ksS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsUUFBdkIsQ0FESixHQUVJLEtBQUssQ0FBQyxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFFBQXBCLENBRkosQ0FOc0MsQ0FTdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FmRDtBQWdCRCxDQTFCRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICBjb25zdCBhZHVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWR1bHRcIik7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RfdGV4dFwiKTtcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIC8vIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgLy8gICBhZHVsdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgYWR1bHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIC8vIH1cclxuICAgIHRvZ2dsZS5jaGVja2VkXHJcbiAgICAgID8gYWR1bHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxyXG4gICAgICA6IGFkdWx0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAvLyBzd2l0Y2ggKHRydWUpIHtcclxuICAgIC8vICAgY2FzZSB0b2dnbGUuY2hlY2tlZDpcclxuICAgIC8vICAgICBhZHVsdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXHJcbiAgICAvLyAgIGRlZmF1bHQ6XHJcbiAgICAvLyAgICAgYWR1bHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIC8vIH1cclxuICB9KTtcclxufSkoKTtcclxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTl6ZEdGeWRDOXpjbU12YW5NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdRVU5CUVN4RFFVRkRMRmxCUVZrN1FVRkRXQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZMEZCVkN4RFFVRjNRaXhSUVVGNFFpeERRVUZtTzBGQlEwRXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHTkJRVlFzUTBGQmQwSXNUMEZCZUVJc1EwRkJaRHRCUVVOQkxFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4alFVRlVMRU5CUVhkQ0xFOUJRWGhDTEVOQlFXUTdRVUZEUVN4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zWTBGQlZDeERRVUYzUWl4WFFVRjRRaXhEUVVGaU8wRkJSVUVzUlVGQlFTeExRVUZMTEVOQlFVTXNaMEpCUVU0c1EwRkJkVUlzVDBGQmRrSXNSVUZCWjBNc1dVRkJUVHRCUVVOd1F5eEpRVUZCTEVsQlFVa3NRMEZCUXl4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzUTBGQlF5eExRVUYyUWp0QlFVTkVMRWRCUmtRN1FVRkpRU3hGUVVGQkxFMUJRVTBzUTBGQlF5eG5Ra0ZCVUN4RFFVRjNRaXhSUVVGNFFpeEZRVUZyUXl4WlFVRk5PMEZCUTNSRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkJMRTFCUVUwc1EwRkJReXhQUVVGUUxFZEJRMGtzUzBGQlN5eERRVUZETEZOQlFVNHNRMEZCWjBJc1RVRkJhRUlzUTBGQmRVSXNVVUZCZGtJc1EwRkVTaXhIUVVWSkxFdEJRVXNzUTBGQlF5eFRRVUZPTEVOQlFXZENMRWRCUVdoQ0xFTkJRVzlDTEZGQlFYQkNMRU5CUmtvc1EwRk9jME1zUTBGVGRFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMFFzUjBGbVJEdEJRV2RDUkN4RFFURkNSQ0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUtDbDdablZ1WTNScGIyNGdjaWhsTEc0c2RDbDdablZ1WTNScGIyNGdieWhwTEdZcGUybG1LQ0Z1VzJsZEtYdHBaaWdoWlZ0cFhTbDdkbUZ5SUdNOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpUdHBaaWdoWmlZbVl5bHlaWFIxY200Z1l5aHBMQ0V3S1R0cFppaDFLWEpsZEhWeWJpQjFLR2tzSVRBcE8zWmhjaUJoUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYVN0Y0lpZGNJaWs3ZEdoeWIzY2dZUzVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR0Y5ZG1GeUlIQTlibHRwWFQxN1pYaHdiM0owY3pwN2ZYMDdaVnRwWFZzd1hTNWpZV3hzS0hBdVpYaHdiM0owY3l4bWRXNWpkR2x2YmloeUtYdDJZWElnYmoxbFcybGRXekZkVzNKZE8zSmxkSFZ5YmlCdktHNThmSElwZlN4d0xIQXVaWGh3YjNKMGN5eHlMR1VzYml4MEtYMXlaWFIxY200Z2JsdHBYUzVsZUhCdmNuUnpmV1p2Y2loMllYSWdkVDFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTEdrOU1EdHBQSFF1YkdWdVozUm9PMmtyS3lsdktIUmJhVjBwTzNKbGRIVnliaUJ2ZlhKbGRIVnliaUJ5ZlNrb0tTSXNJaWhtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnWTI5dWMzUWdkRzluWjJ4bElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb1hDSjBiMmRuYkdWY0lpazdYSEpjYmlBZ1kyOXVjM1FnWVdSMWJIUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGNJbUZrZFd4MFhDSXBPMXh5WEc0Z0lHTnZibk4wSUdsdWNIVjBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9YQ0pwYm5CMWRGd2lLVHRjY2x4dUlDQmpiMjV6ZENCMFpYaDBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9YQ0owWlhOMFgzUmxlSFJjSWlrN1hISmNibHh5WEc0Z0lHbHVjSFYwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvWENKcGJuQjFkRndpTENBb0tTQTlQaUI3WEhKY2JpQWdJQ0IwWlhoMExtbHVibVZ5VkdWNGRDQTlJR2x1Y0hWMExuWmhiSFZsTzF4eVhHNGdJSDBwTzF4eVhHNWNjbHh1SUNCMGIyZG5iR1V1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhjSW1Ob1lXNW5aVndpTENBb0tTQTlQaUI3WEhKY2JpQWdJQ0F2THlCcFppQW9kRzluWjJ4bExtTm9aV05yWldRcElIdGNjbHh1SUNBZ0lDOHZJQ0FnWVdSMWJIUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbWhwWkdSbGJsd2lLVHRjY2x4dUlDQWdJQzh2SUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0F2THlBZ0lHRmtkV3gwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YQ0pvYVdSa1pXNWNJaWs3WEhKY2JpQWdJQ0F2THlCOVhISmNiaUFnSUNCMGIyZG5iR1V1WTJobFkydGxaRnh5WEc0Z0lDQWdJQ0EvSUdGa2RXeDBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9YQ0pvYVdSa1pXNWNJaWxjY2x4dUlDQWdJQ0FnT2lCaFpIVnNkQzVqYkdGemMweHBjM1F1WVdSa0tGd2lhR2xrWkdWdVhDSXBPMXh5WEc0Z0lDQWdMeThnYzNkcGRHTm9JQ2gwY25WbEtTQjdYSEpjYmlBZ0lDQXZMeUFnSUdOaGMyVWdkRzluWjJ4bExtTm9aV05yWldRNlhISmNiaUFnSUNBdkx5QWdJQ0FnWVdSMWJIUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbWhwWkdSbGJsd2lLVnh5WEc0Z0lDQWdMeThnSUNCa1pXWmhkV3gwT2x4eVhHNGdJQ0FnTHk4Z0lDQWdJR0ZrZFd4MExtTnNZWE56VEdsemRDNWhaR1FvWENKb2FXUmtaVzVjSWlrN1hISmNiaUFnSUNBdkx5QjlYSEpjYmlBZ2ZTazdYSEpjYm4wcEtDazdYSEpjYmlKZGZRPT0ifQ==
