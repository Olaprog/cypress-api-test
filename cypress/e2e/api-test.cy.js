describe('API Test', () => {
  it('Get Single User', () => {

     cy.request('https://reqres.in/api/users/2')
     
    //  .its('status').should('be.equal', 200)

     .then((response) => {
        const email =  'janet.weaver@reqres.in'
        const firstName =  'Janet'
        const lastName = 'Weaver'
        const image =  'https://reqres.in/img/faces/2-image.jpg'
        
        expect(response.status).to.eq(200)
         expect(response.body.data.email).eql(email)
         expect(response.body.data.first_name).eql(firstName)
         expect(response.body.data.last_name).eql(lastName)
         expect(response.body.data.avatar).eql(image)
       
          

      })

      
   })


   it('List All Resources', () => {

    cy.request('https://reqres.in/`api/unknown')
    
   //  .its('status').should('be.equal', 200)

    .then((response) => {
 
       expect(response.status).to.eq(200)
       expect(response.body.data.length).to.be.eq(6)
       expect(response.body.total_pages).eql(2)
       expect(response.body.page).eql(2)
       
      
         

     })
    })


    it.only('List Single Resource', () => {

      cy.request('https://reqres.in/api/unknown/2')
      
     //  .its('status').should('be.equal', 200)
  
      .then((response) => {

        const name = 'fuchsia rose';
        const id = 2
        const year = 2001;
        const color = '#C74375'
        const pantone_value = '17-2031';
   
         expect(response.status).to.eq(200)
         expect(response.body.data.id).eq(id)
         expect(response.body.data.name).eql(name)
         expect(response.body.data.year).eql(year)
         expect(response.body.data.color).eql(color)
         expect(response.body.data.pantone_value).eql(pantone_value)
         
        
           
  
       })
      })



})