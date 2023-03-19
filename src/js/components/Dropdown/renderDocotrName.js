import { createEl, find } from '../../tools'

export const renderDoctorsNames = department => {
  const doctorList = find('.doctor-list')

  department.forEach(({ department, doctor }) => {
    doctor.forEach(value => {
      const li = createEl({ el: 'li', css: 'modal-visit__dropdown-item', text: value })

      li.classList.add('doctor-item', `${department}`)
      doctorList.append(li)
    })
  })
}
