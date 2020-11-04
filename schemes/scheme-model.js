// scheme-model
const db = require("../data/db-config");
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes').where({id}).first()
}
function findSteps(id) {
    return db('schemes as sc').join('steps as st', 'sc.id', 'st.scheme_id').select('sc.id', 'sc.scheme_name', 'st.step_number', 'st.instructions').orderBy('st.step_number').where({'sc.id': id})
}
// select
//     sc.id,
//     sc.scheme_name,
//     st.step_number,
//     st.instructions 
// from Schemes as sc
// join Steps as st
//     on sc.id= st.scheme_id
//     order by sc.scheme_name, st.step_number;


async function add(scheme) {
    const [id] = await db('schemes').insert(scheme)
    return db('schemes').where({id: id}).first()
}

async function update(id, changes) {
    const count = await db('schemes').where({id}).update(changes)
    if (count) {
        console.log("count", count)
        return await db('schemes').where({id}).first()
    } else {
        return Promise.resolve(null)
    }
}

async function remove(id) {
    const scheme = await db('schemes').where({id}).first()
    if (!scheme) return Promise.resolve(null)
    await db('schemes').where({id}).del()
    return Promise.resolve(scheme)
}