const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  async saveAll (pageNFs) {
    await prisma.invoices.createMany({
      data: pageNFs,
      skipDuplicates: true
    })
  },

  async findLast () {
    return prisma.invoices.findFirst({
      orderBy: {
        createdAt: 'desc'
      },
      take: 1
    })
  }
}
