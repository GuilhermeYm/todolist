"use client"

import HeaderComponent from "@/app/components/HeaderComponent"
import { useState } from "react" 

export default function createNote() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    
    const handleSubmit = (e) => { 
        e.preventDefault()
    }
    return ( 
        <> 
        <HeaderComponent /> 
        <main>
            <form>
                <div>
                    <h1>Criar anotação </h1>
                </div>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="content">Conteúdo:</label>
                    <input type="text" name="content" id="content" value={content} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Criar</button>
                </div>
            </form>
        </main>
        </>
    )
}