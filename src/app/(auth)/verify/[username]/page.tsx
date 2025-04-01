"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { verifySchema } from '@/schemas/verifySchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { useRouter,useParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

function VerifyAccount() {
        const router = useRouter()
        const params = useParams<{ username: string }>()
        const {toast} = useToast()

        const form = useForm<z.infer<typeof verifySchema>>({
                resolver: zodResolver(verifySchema),
        });

        const onSubmit = async (data: z.infer<typeof verifySchema>) => { 
                try {
                        const response = await axios.post(`/api/verify-code`,{username: params.username, code: data.code})
                        toast({ title: 'Success', description: response.data.message })
                        router.replace('/auth/sign-in')
                } catch (error) {
                        console.error("Error signing up of User:", error);
                        const axiosError = error as AxiosError<ApiResponse>;
                        let errorMessage =
                        axiosError.response?.data.message ?? "Error Verifying of User";
                        toast({
                        title: "Verification Failed",
                        description: errorMessage,
                        variant: "destructive",
                        });
                }
        }

        return (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                        Verify Your Account
                        </h1>
                        <p className="mb-4">
                        Enter the code sent to your email
                        </p>
                </div>
                <Form {...form}>
                        <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                        >
                        <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                        <FormItem>
                                <FormLabel>Verification Code</FormLabel>
                                <FormControl>
                                <Input
                                placeholder="code"
                                {...field}
                                />
                                </FormControl>
                                <FormMessage />
                        </FormItem>
                        )}
                        />
                        <button
                        type="submit"    
                        className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-600"
                        >
                        Verify
                        </button>
                        </form>
                </Form>
                </div>
                </div>
        );
}

export default VerifyAccount