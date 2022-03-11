import React, { useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Label, Input, Button } from "../../ui";

export const LoginPage: NextPage = () => {
    // State
    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Head>
                <title>Login — Ignite</title>
            </Head>
            <div
                className={`flex bg-gray-100 text-black h-screen w-screen m-auto justify-center align-middle self-center items-center`}
            >
                <form
                    autoComplete={`off`}
                    spellCheck={`false`}
                    noValidate={true}
                    className={`bg-white shadow-md rounded-md px-20 py-12 m-auto`}
                >
                    <h1 className={`font-bold text-2xl mb-6 text-gray-800`}>
                        Sign in to your account
                    </h1>
                    <div className={`form-group flex flex-col`}>
                        <Label
                            title={`Email or Username`}
                            className={`font-medium text-sm mb-1.5`}
                        />
                        <Input
                            type={`text`}
                            name={`emailUsername`}
                            id={`emailUsername`}
                            aria-label={`Enter your email or username`}
                            className={`form-control`}
                            placeholder={`Enter your email or username`}
                            value={emailUsername}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmailUsername(e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className={`form-group flex flex-col`}>
                        <div className="flex flex-row justify-between">
                            <Label
                                title={`Password`}
                                className={`font-medium text-sm mb-1.5`}
                            />
                            <p
                                className={`text-sm font-medium text-blue-600 cursor-pointer`}
                            >
                                Forgot your password?
                            </p>
                        </div>
                        <Input
                            type={`password`}
                            name={`password`}
                            id={`password`}
                            aria-label={`Enter your password`}
                            className={`form-control`}
                            placeholder={`Enter your password`}
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                        <Button variant={`default`} className={`px-44`}>
                            Continue
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
