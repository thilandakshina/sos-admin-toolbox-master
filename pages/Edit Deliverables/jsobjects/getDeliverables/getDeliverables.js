export default {
  getDeliverables: () => {
    const targetField = `${Select1.selectedOptionValue}_target`;
    const actualField = `${Select1.selectedOptionValue}_actual`;
    const projectId = appsmith.store.selected_project;

    return `SELECT "${targetField}", 
                "${actualField}"
								FROM public."project" 
            WHERE "id" = '${projectId}'`;
  }
}
