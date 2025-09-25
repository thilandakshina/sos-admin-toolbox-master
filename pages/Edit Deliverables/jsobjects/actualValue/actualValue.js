export default {
  actualValue: () => {
    const value = get_values.data[0][`${Select1.selectedOptionValue}_actual`];
    
    // Check if the value is a boolean
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    // If the value is not a boolean, return it as is (assuming it's a string)
    return value !== undefined && value !== null ? value.toString() : '';
  }
}

