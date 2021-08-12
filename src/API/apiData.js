export const getAllUsers = async (BASE_URL, token) => {
	try {
		const response = await fetch(`${BASE_URL}/admin/users`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		})
		const data = await response.json()
		return data
	} catch (err) {
		console.error(err)
	}
}

export const getUser = async (BASE_URL, username, token) => {
	try {
		const response = await fetch(`${BASE_URL}/users/${username}`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		})
		const data = await response.json()
		return data
	} catch (err) {
		console.error(err)
	}
}

export const getUserLoads = async (BASE_URL, username, token) => {
	try {
		const response = await fetch(`${BASE_URL}/users/${username}/loads`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		})
		const loads= await response.json()
		return loads
	} catch (err) {
		console.error(err)
	}
}

// CREATE
export const createUser = async (BASE_URL, formData) => {
	const body = { ...formData }
	try {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
		const data = await response.json()
		return data
	} catch (err) {
		console.error(err)
	}
}

// EDIT

export const addLoad = async (BASE_URL, username, formData, token) => { 
   console.log ("call to addLoad")
   const body = { ...formData }; 
   try {
      const url = `${BASE_URL}/users/${username}/loads/add`;
      console.log (url);
     const response = await fetch (url, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
       },
       body: JSON.stringify(body)
     })
     const data = await response.json()
     console.log ("data from addLoad", data)
     return data

 
   } catch(error){
       console.error(error);
   }finally {
		getUser(BASE_URL, username, token)
	}

 }

// DELETE

export const deleteLoadById = async (BASE_URL, id) => { // HERE
   try {
     console.log ("inside delete load : " + id);
     const response = await fetch(`${BASE_URL}/${id}`, { // HERE 
       method: "DELETE", 
       headers: {
         "Content-Type": "application/json"
       }
     });
     const data = await response.json(); // <== deleted load
    
   } catch (err) {
     console.log(err);
   } finally {
     //await getLoads(); 
 }
 }

// export const createSnippet = async (BASE_URL, username, token, formData, user_id) => {
// 	const body = { ...formData, owner: user_id }
// 	try {
// 		const response = await fetch(`${BASE_URL}/user/${username}/${formData.parentFolder}/addsnippet`, {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify(body)
// 		})
// 		const data = await response.json()
// 		return data
// 	} catch (err) {
// 		return err
// 	} finally {
// 		getUserData(BASE_URL, username, token)
// 	}
// }

// export const addFolder = async (BASE_URL, username, token, formData) => {
// 	const body = { ...formData }
// 	try {
// 		const response = await fetch(`${BASE_URL}/user/${username}/addfolder`, {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`
// 			},
// 			body: JSON.stringify(body)
// 		})
// 		const data = await response.json()
// 		return data
// 	} catch (error) {
// 		console.error(error)
// 	}
// }