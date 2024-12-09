import "next-auth"

declare module "next-auth" {
    interface User{
        _id?: String
        isVerified?: boolean
        isAcceptingMessages?: boolean
        username?: string
    }

    interface Session { 
        user: {
            _id?: String
            isVerified?: boolean
            isAcceptingMessages?: boolean
            username?: string
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        _id?: String
        isVerified?: boolean
        isAcceptingMessages?: boolean
        username?: string
    }
}
