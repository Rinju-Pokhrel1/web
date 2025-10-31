'use server'

import fs from 'fs/promises'

export async function submitAction(formData) {
  const name = formData.get('name')
  const add = formData.get('add')

  console.log("Name:", name, "Address:", add)

  await fs.writeFile('rinju.txt', `Name is ${name} and Address is ${add}`)
}
