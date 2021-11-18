// Get source name from list
let getSourceFrmList = (data) => {
  return data.map((article) => {
    return article.source.name;
  });
};

// Count item occurences in list
let listByOccurrenceCount = (list) => {
  return list.reduce((sourceList, sourceName) => {
    // If the sourceName matches a sourceName value in the sourceList,
    if (sourceList.find((item) => item.sourceName === sourceName)) {
      // then store the object
      let objectGevonden = sourceList.find(
        (item) => item.sourceName === sourceName
      );
      // and use the stored object to increment the article count.
      objectGevonden.articleCount++;
    } else {
      // If the sourceName does not exist in the sourceList,
      // then push an new object to the list
      sourceList.push({ sourceName: sourceName, articleCount: 1 });
    }
    // return the list
    return sourceList;
  }, []);
};

// Replace value(s) from the list
let removeWordFromValue = (list, replace, replaceWith) => {
  return list.map((item) => {
    // If replace value is found in the list, replace it with the new value
    if (item.includes(replace)) {
      return item.replaceAll(replace, replaceWith);
    } else {
      // Else just return regular value
      return item;
    }
  });
};

// Change all values from list to firstletter uppercase
let uppercaseFirstLetterValueFromList = (list) => {
  return list.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};

export {
  getSourceFrmList,
  listByOccurrenceCount,
  removeWordFromValue,
  uppercaseFirstLetterValueFromList,
};
