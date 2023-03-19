import { createEl } from '../../tools'

export const renderDepartment = (department, tab, list) => {
  if (tab === 'Department') {
    department.forEach(({ department }) => {
      const li = createEl({ el: 'li', css: 'modal-visit__dropdown-item', text: department })

      li.setAttribute('data-post', `${department}`)
      list.append(li)
    })
  }
}
