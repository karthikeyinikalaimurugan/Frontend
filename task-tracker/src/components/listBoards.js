import React from 'react'

const listBoards = ({boards={}}) => {
    console.log('listboard', boards)
    return (
        <div>
            {
                Object.keys(boards).map(e=>{
                    <div key={e}>
                        <h6>{e}</h6>
                        {
                            boards[e].map(task=>{
                                <div key={task.id}>
                                    <div>{task.title}</div>
                                </div>
                            })
                        }
                    </div>
                })
            }\
        </div>
    )
}

export default listBoards
