"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateDto = void 0;
const comments_schema_1 = require("../comments.schema");
class CommentsCreateDto extends PickType(comments_schema_1.Comments, [
    'author',
    'contents',
]) {
}
exports.CommentsCreateDto = CommentsCreateDto;
//# sourceMappingURL=comments.dto.js.map