import Fastify from "fastify"
import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"

import { articleRoutes } from "./routes/articles"

const fastify = Fastify({
  logger: true
})

async function start() {

  await fastify.register(swagger, {
    openapi: {
      info: {
        title: "Article API",
        version: "1.0.0"
      }
    }
  })

  await fastify.register(swaggerUI, {
    routePrefix: "/docs"
  })

  await fastify.register(articleRoutes)

  await fastify.listen({
    port: 3000,
    host: "0.0.0.0"
  })

}

start()