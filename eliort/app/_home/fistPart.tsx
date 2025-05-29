"use client"


import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { Calendar } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import ReactClipboard from 'react-clipboardjs-copy';
import { IoCopy } from 'react-icons/io5'

const tabnavigation = [
    { id: 1, name: 'Home', page: '/' },
    { id: 2, name: 'Nos services', page: '/' },
    { id: 3, name: 'Etude de Cas', page: '/' },
    { id: 4, name: 'A propos', page: '/' },
    { id: 5, name: 'Carrière', page: '/' },
]

const FistPart = () => {


    // const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <nav className="p-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-semibold pl-5 md:pl-10 text-[#0E2148] ">Eliort</h1>
                <MdMenu size={24} className='md:hidden' />
                <div className="hidden md:flex flex-row items-center gap-5 justify-center">
                    {tabnavigation.map((item) => (
                        <Link href={item.page} key={item.id} className="mx-3 hover:underline  transition-all">
                            {item.name}
                        </Link>
                    ))}




                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='bg-[#483AA0] cursor-pointer'>Nous contacter</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Prenez contact avec Eliort</DialogTitle>
                                <DialogDescription>
                                    Nos équipe s&apos;assuyerons de bien traité toutes vos demande.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor="message-2">Votre E-mail:</Label>
                                    <Textarea placeholder="Entrez votre mail par ici." id="message-2" />
                                    <p className="text-sm text-muted-foreground">
                                        Vous reçeverai un mail de confirmation de notre équipe .
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 items-center gap-4">
                                    <h1 className=' font-semibold'>Prendre un rendez vous</h1>
                                    <Calendar
                                        mode="single"
                                        // selected={date}
                                        // onSelect={setDate}
                                        className="rounded-md border shadow"
                                    />
                                </div>
                                <p className=' '>Notre adresse mail:</p>

                                <div className="grid grid-cols-2 items-center gap-4">
                                    
                                    <p className='text-blue-500'>eliort323@gmail.com </p>
                                    <ReactClipboard text="eliort323@gmail.com" onSuccess={() => { }} onError={() => { }}>
                                   
                                    <button  className='cursor-pointer'
                                        onClick={() => {
                                            alert('mail copier');
                                        }}
                                    >
                                         <IoCopy size={15} />
                                    </button>
                                </ReactClipboard>
                                    
                                </div>

                                
                            </div>
                            <DialogFooter>
                                <Button type="submit">Evoyer</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>







                </div>
            </div>
        </nav>
    )
}

export default FistPart
