var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  const result = matchFunc(startEl);
  if (result) {
    resultSet.push(startEl);
  }
  if (startEl.children.length > 0) {
    for (const child of startEl.children) {
      resultSet = resultSet.concat(
        traverseDomAndCollectElements(matchFunc, child)
      );
    }
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // let arr = selector.split("");
  // if (arr[0] === "#") {
  //   return "id";
  // } else if (arr[0] === ".") {
  //   return "class";
  // } else if (arr.includes(".")) {
  //   return "tag.class";
  // } else {
  //   return "tag";
  // }

  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.split(".").length > 1) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (el) => `#${el.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (el) => el.classList.contains(selector.slice(1));
  } else if (selectorType === "tag.class") {
    matchFunction = (el) => {
      const [tagName, className] = selector.split(".");
      return (
        el.tagName.toLowerCase() === tagName.toLowerCase() &&
        el.classList.contains(className)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (el) => el.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
