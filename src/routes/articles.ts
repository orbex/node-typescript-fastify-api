import { FastifyInstance } from "fastify"
import prisma from "../plugins/prisma"
import { ArticleInput } from "../types/article"

export async function articleRoutes(fastify: FastifyInstance) {

  fastify.get("/articles", async () => {
    return prisma.article.findMany()
  })

  fastify.get("/articles/:id", async (request) => {
    const { id } = request.params as { id: string }

    return prisma.article.findUnique({
      where: { id: Number(id) }
    })
  })

  fastify.post("/articles", async (request) => {

    const body = request.body as ArticleInput

    return prisma.article.create({
      data: body
    })

  })

  fastify.put("/articles/:id", async (request) => {

    const { id } = request.params as { id: string }
    const body = request.body as ArticleInput

    return prisma.article.update({
      where: { id: Number(id) },
      data: body
    })

  })

  fastify.delete("/articles/:id", async (request) => {

    const { id } = request.params as { id: string }

    return prisma.article.delete({
      where: { id: Number(id) }
    })

  })

}