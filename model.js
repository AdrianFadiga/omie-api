const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  async saveAll (pageNFs) {
    await prisma.invoices.createMany({
      data: pageNFs
    })
  }
}
