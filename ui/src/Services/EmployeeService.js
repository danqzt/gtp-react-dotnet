import React from 'react'

const API_ENDPOINT = 'http://localhost:5240/employees';

export const fetchEmployees  = async () =>
    await(await fetch(API_ENDPOINT)).json()

export const fetchEmployeeById  = async (id) =>
    await(await fetch(`${API_ENDPOINT}/${id}`)).json()

export const updateEmployeeSvc = async (data) => {
    var json = await fetch(API_ENDPOINT, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    if(json.status > 200)
    {
        throw Error("HTTP Error: " + json.status)
    }

    return await json.json();
}

export const createEmployeeSvc = async (data) => {
    var json = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    if(json.status > 200)
    {
        throw Error("HTTP Error: " + json.status)
    }

    return await json.json();
}

export const deleteEmployeeSvc  = async (id) =>
{
    var json = await fetch(`${API_ENDPOINT}/${id}`, {
        method : 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(json.status > 200)
    {
        throw Error("HTTP Error: " + json.status)
    }

}