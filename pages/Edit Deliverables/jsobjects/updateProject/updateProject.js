export default {
  updateProject: () => {
    const targetField = `${Select1.selectedOptionValue}_target`;
    const actualField = `${Select1.selectedOptionValue}_actual`;
    const targetValue = _target.text;
    const actualValue = _actual.text;
    const projectId = appsmith.store.selected_project;

    // Inline function to convert values to boolean if applicable
    const convertToBoolean = (value) => {
      if (typeof value === 'string') {
        const lowerValue = value.toLowerCase();
        if (lowerValue === 'yes' || lowerValue === 'true') {
          return true;
        } else if (lowerValue === 'no' || lowerValue === 'false') {
          return false;
        }
      }
      return value;
    };

    // Convert values to boolean if applicable
    const convertedTargetValue = convertToBoolean(targetValue);
    const convertedActualValue = convertToBoolean(actualValue);

    return `UPDATE public."project" 
            SET "${targetField}" = ${convertedTargetValue === true ? 'true' : convertedTargetValue === false ? 'false' : `'${convertedTargetValue}'`}, 
                "${actualField}" = ${convertedActualValue === true ? 'true' : convertedActualValue === false ? 'false' : `'${convertedActualValue}'`} 
            WHERE "id" = '${projectId}'`;
  }
}
