# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Question.destroy_all
Comment.destroy_all

# Users

marco = User.create(username: 'Marco', password: '123')
annie = User.create(username: 'Annie', password: '456')
gb = User.create(username: 'GoBears', password: '789')

# Questions

q1 = Question.create(image:'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk1MDk1MDA1Njk2NjMyNTQ2/sam-jackson-v---mark-rebilias-2.jpg', body: 'Who should start for Cal at QB this season, and why?')
q2 = Question.create(image:'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk1MDk1MDA1Njk2NjMyNTQ2/sam-jackson-v---mark-rebilias-2.jpg', body: "Who do you think will be Cal's best WR next season?")
q3 = Question.create(image:'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk1MDk1MDA1Njk2NjMyNTQ2/sam-jackson-v---mark-rebilias-2.jpg', body: 'Which 2023 opponent are you most looking forward to playing?')

# Comments

Comment.create(body: "I'm rolling with Sam Jackson, he's more electric than anyone we have on the roster!", user_id: annie.id, question_id: q1.id)
Comment.create(body: "Sam Jackson 100%, he's got so much ability, I'd keep an eye on Fernando Mendoza too though.", user_id: marco.id, question_id: q1.id)
Comment.create(body: "Definitely Fernando Mendoza, he's worked his tail off and deserves a shot!", user_id: gb.id, question_id: q1.id)

Comment.create(body: "It'll be Jeremiah Hunter, no doubt.", user_id: marco.id, question_id: q2.id)
Comment.create(body: "Mavin Anderson", user_id: annie.id, question_id: q2.id)
Comment.create(body: "Money Mave!", user_id: gb.id, question_id: q2.id)

Comment.create(body: "USC, can't wait for that one", user_id: gb.id, question_id: q3.id)
Comment.create(body: "Auburn for SURE, bring them here ASAP", user_id: marco.id, question_id: q3.id)
Comment.create(body: "UCLA", user_id: annie.id, question_id: q3.id)
