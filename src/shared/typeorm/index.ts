import { createConnection, Connection } from "typeorm"

export const connectDB = async (): Promise<Connection> => {
    return createConnection()
}
