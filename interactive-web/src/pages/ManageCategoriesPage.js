import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import CategoryContainer from "../component/postComponents/CategoryContainer"; 
import { Button } from "../component/Button";

function ManageCategoriesPage() {

    const [availableCategories, setCategory] = useState([])

    const addToCategoryList = (categoryName) => {
        if (!availableCategories.includes(categoryName)) {
          setCategory([...availableCategories, categoryName])
        }
    }
  
    const removeFromCategoryList = (categoryName) => {
        if (availableCategories.includes(categoryName)) {
          const index = availableCategories.indexOf(categoryName)
          availableCategories.splice(index, 1)
          setCategory([...availableCategories])
        }
    } 

    useEffect(() => {
        projectFirestore
        .collection("categories")
        .get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                setCategory([...doc.data().CategoryList])
            });
        });
    }, []);

    return (
        <> 
            <br/>
            <br/>
            <br/>
            <h1>Category List</h1>

            <div className="manage--categories--form--container">
                <form id="add-category-form">
                    <input type="text" name="name" placeholder="Category name"/>
                    <button type="button" onClick={() => {
                        const form = document.querySelector('#add-category-form');
                        addToCategoryList(form.name.value)
                        form.name.value = '';
                    }}>Add Category</button>
                </form>
            </div>

            <div className="manage--categories--container">
                <CategoryContainer categoryList={availableCategories} callBackFunc={removeFromCategoryList}/>
            </div>
            {/* need a button to add categories */}
            {/* when i add a new category it needs to update the db */}
        </>
    );
}

export default ManageCategoriesPage;